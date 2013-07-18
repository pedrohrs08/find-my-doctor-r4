json.array!(@states) do |state|
  json.extract! state, :id, :name, :abreviation, :description
  json.url state_url(state, format: :json)
end
