require File.expand_path('../boot', __FILE__)

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module GameOfHearts
  class Application < Rails::Application
    config.paperclip_defaults = {
      storage: :s3,
      s3_credentials: {
        bucket: ENV["s3_bucket"],
        access_key_id: ENV["s3_access_key_id"],
        secret_access_key: ENV["s3_secret_access_key"],
        s3_region: ENV["s3_region"]
      }
    }
    config.active_record.raise_in_transactional_callbacks = true
  end
end
