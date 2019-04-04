require "jwt"

class Api::V1::UsersController < Api::V1::BaseController
    def login
        render json: {user: current_user}, status: 200 and return if current_user
        
        user = User.find_by email: params[:email]

        if user
            if user.password == params[:password]
                user_infor = {id: user.id, time: Time.now}
                token = JWT.encode user_infor, nil, 'none'
                render json: {status: 200, authenToken: token}
            else
                render json: {message: "Password's not correct", status: 500}
            end
        else
            render json: {message: "User's not found", status: 500}
        end
    end
end