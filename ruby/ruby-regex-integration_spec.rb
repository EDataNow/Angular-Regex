require_relative 'swift_script'
require_relative 'ruby-regex'
require 'pry'

describe "RubyRegex" do
  let(:ruby_regex) { RailsRegex.new }
  let(:barcode) { 'P12345-A500-H1'}
  let(:special_barcode) { '*IVIN1.2.3.4.5.6?' }

  describe "#matchStartIndexAndInputAndSelectIndex Match on given position" do
    describe "Return from match" do
      context "should return all characters proceeding from given postion" do
        it "if match is found and length is not specified" do
          regEx = ruby_regex.match_on_position_return_from_position("1", 2, 0, 5)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("45-A500-H1")
        end

        it "if match is found and length/input_string is not specified" do
          regEx = ruby_regex.match_on_position_return_from_position("", 2, 0, 5)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("45-A500-H1")
        end

        it "even with special charcters in barcode" do
          regEx = ruby_regex.match_on_position_return_from_position("*I", 1, 0, 3)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, special_barcode)
          expect(result).to eq("VIN1.2.3.4.5.6?")
        end
      end
      context "should return the amount of characters specified by length param proceeding from given postion" do
        it "if match is found" do
          regEx = ruby_regex.match_on_position_return_from_position("1", 2, 3, 5)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("45-")
        end

        it "if match is found and input_string is not specified" do
          regEx = ruby_regex.match_on_position_return_from_position("", 2, 3, 5)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("45-")
        end
      end
      context "Return empty" do
        it "if no match is found" do
          regEx = ruby_regex.match_on_position_return_from_position("1", 3, 0, 5)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("")
        end
      end
      context "Return empty" do
        it "if specific lenght is greater than remaining string" do
          regEx = ruby_regex.match_on_position_return_from_position("1", 3, 0, 15)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("")
        end
      end
    end

    describe "return from match" do
      context "should return all characters proceeding from match if match is found" do
        it "and length is not specified" do
          regEx = ruby_regex.match_on_position_return_from_match(7,"-", 0)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("A500-H1")
        end
        it "and length/input_string is not specified" do
          regEx = ruby_regex.match_on_position_return_from_match(7,"", 0)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("A500-H1")
        end
      end
      context "should return amount of charcters specified by specific_length" do
        it "and input_string is specified" do
          regEx = ruby_regex.match_on_position_return_from_match(7,"-", 4)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("A500")
        end
        it "and input_string is not specified" do
          regEx = ruby_regex.match_on_position_return_from_match(7,"", 4)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("A500")
        end
      end
      context "Return empty" do
        it "if no match is found" do
          regEx = ruby_regex.match_on_position_return_from_match(2,"P", 5)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("")
        end
      end
    end

    describe "Return from match(include match)" do
      context "when should return all characters proceeding from match, including match" do
        it "if match is found and length is not specified" do
          regEx = ruby_regex.match_on_position_return_from_match_include_match(6, "5", 0)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("5-A500-H1")
        end
        it "if match is found and length/input_string is not specified" do
          regEx = ruby_regex.match_on_position_return_from_match_include_match(6, "", 0)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("5-A500-H1")
        end
      end

      context "should return the amount of characters specified by length param proceeding from match, including match" do
        it "if match is found" do
          regEx = ruby_regex.match_on_position_return_from_match_include_match(2, "1", 5)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("12345")
        end
        it "if match is found and input string is not specified" do
          regEx = ruby_regex.match_on_position_return_from_match_include_match(2, "", 5)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("12345")
        end
      end
      context "Return empty" do
        it "if no match is found" do
          regEx = ruby_regex.match_on_position_return_from_match_include_match(2,"P", 5)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("")
        end
      end
    end

    describe "Match on First Match of #match_on_first_match_of_return_from_position" do
      context "Return a specific length string by given postion after the match" do
        it "if match is found and input string is not specified" do
          regEx = ruby_regex.match_on_first_match_of_return_from_position(2, "A", 2)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("00")
        end
        it "should return whole string after the given index" do
          regEx = ruby_regex.match_on_first_match_of_return_from_position(2, "A", 0)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("00-H1")
        end
      end
      context "Return empty" do
        it "if specific_length is greater than length of remaining string" do
          regEx = ruby_regex.match_on_first_match_of_return_from_position(2, "A", 10)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("")
        end
      end
    end

    describe "Return from match #match_on_first_match_of_return_from_match" do
      context "should match on any position" do
        it "should return a specfied length string if specific length is givn" do
          regEx = ruby_regex.match_on_first_match_of_return_from_match("A", 2)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("50")
        end
        it "should return the complete string if no specific length of return is provided" do
          regEx = ruby_regex.match_on_first_match_of_return_from_match("A", 0)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("500-H1")
        end
      end
      context "Return empty" do
        it "if specific_length is greater than length of remaining string" do
          regEx = ruby_regex.match_on_first_match_of_return_from_match("A", 10)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("")
        end
      end
    end

    describe "Return from match including match" do
      context "should match on any position" do
        it "should return a specfied length string if specific length is given" do
          regEx = ruby_regex.match_on_first_match_of_return_from_match_include_match("A", 2)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("A5")
        end
        it "should return the complete string if no specific length of return is provided" do
          regEx = ruby_regex.match_on_first_match_of_return_from_match_include_match("A", 0)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("A500-H1")
        end
      end
      context "Return empty" do
        it "if specific_length is greater than length of remaining string" do
          regEx = ruby_regex.match_on_first_match_of_return_from_match_include_match("A", 10)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("")
        end
      end
      context "Return empty" do
        it "if input string is not part of the barcode" do
          regEx = ruby_regex.match_on_first_match_of_return_from_match_include_match("Z", 3)
          escape_regex = Regexp.escape(regEx)
          result = regex(escape_regex, barcode)
          expect(result).to eq("")
        end
      end
    end
  end
end
