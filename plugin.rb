# name: adult-wearning
# about: 18禁燈箱
# version: 0.0.1
# authors: Hazel

add_admin_route 'purple_tentacle.title.title', 'purple-tentacle'

Discourse::Application.routes.append do
    get '/admin/plugins/purple-tentacle' => 'admin/plugins#index', constrains: StaffConstraint.new
end

