require 'rake'
require_relative 'swift_script'

task :regex do
  option = ENV['OPTION']
  input_string = ENV['INPUT_STRING']

  puts regex(option, input_string)
end
