# config/initializers/rack_attack.rb

class Rack::Attack
  # Throttle requests by IP address
  throttle('req/ip', limit: 100, period: 1.minute) do |req|
    req.ip
  end

  # Blocklist example: Block requests from a specific IP
  # blocklist('block 1.2.3.4') do |req|
  #   req.ip == '1.2.3.4'
  # end

  # Safelist example: Allow requests from localhost
  # safelist('allow-localhost') do |req|
  #   %w[127.0.0.1 ::1].include?(req.ip)
  # end

  # Custom response for throttled requests
  self.throttled_response = lambda do |env|
    now = Time.now.utc
    match_data = env['rack.attack.match_data']

    retry_after = match_data[:period] - (now.to_i % match_data[:period])
    [
      429,
      { 'Content-Type' => 'application/json', 'Retry-After' => retry_after.to_s },
      [{ error: 'Too many requests. Please wait before retrying.' }.to_json]
    ]
  end
end
