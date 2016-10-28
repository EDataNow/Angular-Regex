require_relative 'rails-regex'

describe RailsRegex do
  let(:regex) { RailsRegex.new }

  describe 'Return from position' do
    describe '#match_on_position_return_from_position' do

      context 'when specific length is given' do
        it 'it should return regex for given character is on given index and it should return characters from select index and specified length, excluding match' do
          expect(regex.match_on_position_return_from_position("1", 2, 2, 4)).to eq("^.{1}1.{1}(.{2})")
        end
      end

      context 'when specific length is not given' do
        it 'it should return regex for returning all characters from given index' do
          expect(regex.match_on_position_return_from_position("1", 2, 0, 4)).to eq("^.{1}1.{1}(.+)")
        end
      end

      context 'if match is found and length and input_string is not specified' do
        it 'should return regex for returning all charactes after the select index' do
          expect(regex.match_on_position_return_from_position("", 2, 0, 3)).to eq("^.{1}.{1}(.+)")
        end
      end

      context 'if match is found and input_string is not specified' do
        it 'should return regex for returning specified length of charactes after the select index' do
          expect(regex.match_on_position_return_from_position("", 2, 3, 5)).to eq("^.{1}.{3}(.{3})")
        end
      end

      context 'if special character(s) is in regex' do
        it 'should return regex with the special character(s) escaped' do
          expect(regex.match_on_position_return_from_position("*I", 1, 0, 3)).to eq("^.{0}\\*I.{0}(.+)")
        end
      end

      context 'if start index, specific length and select index is given' do
        it 'should return regex specified length of characters proceeding from position' do
          expect(regex.match_on_position_return_from_position("12", 2, 3, 5)).to eq("^.{1}12.{1}(.{3})")
        end
      end
    end
  end

  describe 'Return from match' do
    describe '#match_on_position_return_from_match' do

      context 'If match is found and specific length is not specified' do
        it 'it should return regex for returning all characters proceeding from match, exlcuding match' do
          expect(regex.match_on_position_return_from_match(7, "-", 0)).to eq("^.{6}\\-(.+)")
        end
      end

      context 'If match is found and specific length is not specified' do
        it 'it should return regex for returning all characters proceeding from match, exlcuding match' do
          expect(regex.match_on_position_return_from_match(7, "-", 0)).to eq("^.{6}\\-(.+)")
        end
      end

      context 'If match is found, and specific length is given' do
        it 'should return regex for returning specified length of characters proceeding from match, excluding match' do
          expect(regex.match_on_position_return_from_match(7, "-", 4)).to eq("^.{6}\\-(.{4})")
        end
      end

      context 'If match is found, and specific length is given' do
        it 'should return regex for returning specified length of characters proceeding from match, excluding match' do
          expect(regex.match_on_position_return_from_match(7, "-", 4)).to eq("^.{6}\\-(.{4})")
        end
      end
    end
  end

  describe 'Return from match, including match' do
    describe '#match_on_position_return_from_match_include_match' do

      context 'if match is found and length is not specified' do
        it 'should return regex for returning all characters proceeding from match, including match' do
          expect(regex.match_on_position_return_from_match_include_match(6, "5", 0)).to eq("^.{5}(5.+)")
        end
        it 'should return regex for returning all characters proceeding from start index, if no input string and specific length is not given' do
          expect(regex.match_on_position_return_from_match_include_match(6, "", 0)).to eq("^.{5}(.+)")
        end
      end

      context 'If match is found, given a specific length' do
        it 'should return regex for returning specified length of characters proceeding from match, including match' do
          expect(regex.match_on_position_return_from_match_include_match(2, "1", 5)).to eq("^.{1}(1.{4})")
        end
        it 'should return regex for returning specified length of characters from and including start index' do
          expect(regex.match_on_position_return_from_match_include_match(2, "", 5)).to eq("^.{1}(.{5})")
        end
      end
    end
  end

  describe 'Match on any position' do
    describe '#match_on_first_match_of_return_from_position' do

      context 'when only given a specific length' do
          it 'should return regex for returning specified length of characters on a given index after the match' do
            expect(regex.match_on_first_match_of_return_from_position(2, "A", 2)).to eq("(A.{1})(.{2})")
          end
      context 'when no specific to return is given' do
          it 'should return regex for returning all characters on a given index after the match' do
            expect(regex.match_on_first_match_of_return_from_position(2, "A", 0)).to eq("(A.{1})(.+)")
          end
        end
      end
    end
  end

  describe 'Return from match' do
    describe '#match_on_first_match_of_return_from_match' do

      context 'when a specific length is given' do
        it 'should retunr regex for returning specified length of characters from and not including match' do
          expect(regex.match_on_first_match_of_return_from_match("A", 2)).to eq("A(.{2})")
        end
      end

      context 'when specific length is not given' do
        it 'should retunrn regex for returning all characters from and not including match' do
          expect(regex.match_on_first_match_of_return_from_match("A", 0)).to eq("A(.+)")
        end
      end
    end
  end

  describe 'Return from match including match' do
    describe '#match_on_first_match_of_return_from_match_include_match' do

      context 'when a specific length is given' do
        it 'should retunr nregex for returning specified length of characters from and including match' do
          expect(regex.match_on_first_match_of_return_from_match_include_match("A", 2)).to eq("(A.{1})")
        end
      end

      context 'when specific length is not given' do
        it 'should retunrn regex for returning all characters including match' do
          expect(regex.match_on_first_match_of_return_from_match_include_match("A", 0)).to eq("(A.+)")
        end
      end
    end
  end
end
