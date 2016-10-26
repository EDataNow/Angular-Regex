class RailsRegex

	def initialize()
	end

	def match_on_position_return_from_position(input_string, start_index, specific_length, select_index)
		check_specific_length = specific_length > 0
		sanitized_input = Regexp.escape(input_string)
		regex = check_specific_length ? "^.{#{start_index - 1}}#{sanitized_input}.{#{select_index - (input_string.length) - start_index}}(.{#{specific_length}})" : "^.{#{start_index - 1}}#{sanitized_input}.{#{select_index - (input_string.length) - start_index}}(.+)"
	end

  def match_on_position_return_from_match(start_index, input_string, specific_length)
    check_specific_length = specific_length > 0
    input_string == "" ? sanitized_input = "." : sanitized_input = Regexp.escape(input_string)
    regex = check_specific_length ? "^.{#{start_index - 1}}#{sanitized_input}(.{#{specific_length}})" : "^.{#{start_index - 1}}#{sanitized_input}(.+)"
  end

  def match_on_position_return_from_match_include_match(start_index, input_string, specific_length)
    check_specific_length = specific_length > 0
		sanitized_input = Regexp.escape(input_string)
    regex = check_specific_length ? "^.{#{start_index - 1}}(#{sanitized_input}.{#{specific_length - (input_string.length)}})" : "^.{#{start_index - 1}}(#{sanitized_input}.+)"
  end

  def match_on_first_match_of_return_from_position(select_index, input_string, specific_length)
    check_specific_length = specific_length > 0
		sanitized_input = Regexp.escape(input_string)
    regex = check_specific_length ? "(#{sanitized_input}.{#{select_index - 1}})(.{#{specific_length}})" : "(#{sanitizedInput}.{#{select_index - 1}})(.+)"
  end

  def match_on_first_match_of_return_from_match(input_string, specific_length)
		check_specific_length = specific_length > 0
		ssanitized_input = Regexp.escape(input_string)
		regex = check_specific_length ? "#{sanitized_input}(.{#{specific_length}})" : "#{sanitized_input}(.+)"
	end

	def match_on_first_match_of_return_from_match_include_match(input_string, specific_length)
		check_specific_length = specific_length > 0
		sanitized_input = Regexp.escape(input_string)
		regex = check_specific_length ? "(#{sanitized_input}.{#{specific_length - (input_string.length)}})" : "(#{sanitized_input}.+)"
	end
end
