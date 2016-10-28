def regex(regex, input_string)
  output = `../build/Debug/RegexpCommandLine #{regex} #{input_string}`
  output.strip
end
