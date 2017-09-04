class User < ActiveRecord::Base
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, :profile, :detail, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  attr_reader :password

  has_one :profile, dependent: :destroy, autosave: true
  has_one :detail, dependent: :destroy, autosave: true
  has_many :question_answers
  has_many :questions, through: :question_answers
  has_many :answers, through: :question_answers

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def favorite_rating(match)
    base_match = 50
    shared_questions = self.questions & match.questions
    user_answers = self.answers.index_by(&:question_id)
    match_answers = match.answers.index_by(&:question_id)

    answer_matches = shared_questions.map do |question|
      user_answers[question.id] == match_answers[question.id] ? 100 : 20
    end
    answer_matches << base_match
    answer_matches.sum / answer_matches.length
  end
end
