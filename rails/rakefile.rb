require 'rake'
require_relative 'swift_script'

task :regex do
  regexp = ENV['REGEXP']
  input_string = ENV['INPUT_STRING']

  puts regex(regexp, input_string)
end
