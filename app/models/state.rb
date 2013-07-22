class State < ActiveRecord::Base
	validates :abreviation, length: { maximum: 2 }, presence: true
	validates :name, presence: true

	default_scope order("name ASC")
	scope :in_order, lambda { order("id ASC") }
end
