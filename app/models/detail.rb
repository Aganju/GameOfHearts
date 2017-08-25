class Detail < ActiveRecord::Base
  validates :user, :birthdate, :gender, presence: true
  validates :latitude, :longitude, presence: { message: 'Zipcode is invalid' }
  validates :address, presence: {
    message: 'You are not located in westeros(try a US zipcode)'
  }

  has_attached_file :main_img
  validates_attachment_content_type :main_img, content_type: /\Aimage\/.*\Z/

  before_validation :geocode, :reverse_geocode

  belongs_to :user

  attr_reader :zipcode
  geocoded_by :zipcode
  reverse_geocoded_by :latitude, :longitude do |obj, results|
    if (geo = results.first) && geo.country == 'United States'
      obj.address = geo.city + ', ' + geo.state + ', ' + geo.postal_code
    end
  end

  def zipcode=(zipcode)
    @zipcode = zipcode
  end
end
