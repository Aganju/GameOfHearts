class Detail < ActiveRecord::Base
  validates :user, :birthdate, :gender, presence: true
  validate :valid_address
  validates :address, presence: {
    message: 'is not located in westeros(try a US zipcode)'
  }

  has_attached_file :main_img, default_url: "missing.jpg"
  validates_attachment_content_type :main_img, content_type: /\Aimage\/.*\Z/

  before_validation :geocode, :reverse_geocode

  belongs_to :user

  attr_reader :zipcode
  geocoded_by :zipcode
  reverse_geocoded_by :latitude, :longitude do |obj, results|
    if (geo = results.first) && geo.country == 'United States'
      obj.address = geo.city + ', ' + geo.state_code + ', ' + geo.postal_code
    end
  end

  def valid_address
    errors.add(:address, 'does not exist') unless latitude && longitude
  end

  def zipcode=(zipcode)
    @zipcode = zipcode
  end

  def age
    now = Time.now.utc.to_date
    if now.month > birthdate.month ||
       now.month == birthdate.month && now.day >= birthdate.day

      now.year - birthdate.year
    else
      now.year - birthdate.year - 1
    end
  end
end
