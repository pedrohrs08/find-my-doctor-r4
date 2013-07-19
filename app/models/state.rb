class State < ActiveRecord::Base
	validates :abreviation, length: { maximum: 2 }, presence: true
	validates :name, presence: true
end
