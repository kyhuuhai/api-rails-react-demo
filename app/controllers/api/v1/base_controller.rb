require "jwt"

class Api::V1::BaseController < ApplicationController
    def auth_member
        begin
            decoded_token = JWT.decode request.headers["authenToken"], nil, false
            
            decoded_token = decoded_token[0]
            if !User.exists?(decoded_token["id"]) || Time.parse(decoded_token["time"]) + 30.minutes < Time.now
                render json: {message: "Session not available, please login again", status: 500}
            end
        rescue
            render json: {message: "Token not valid, please login again!", status: 500}
        end
    end

    def current_user
        @current_user ||= (User.find_by_id session[:user_id])
    end
end