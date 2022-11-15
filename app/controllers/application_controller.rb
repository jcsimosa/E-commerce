class ApplicationController < ActionController::API
    # include ActionControler::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

def current_user
    @current_user||=User.find_by(id: session[:user_id])
end

private 

def not_found(exception)
    render json: {error: "#{exception.model} not found"}, status: :not_found
end 
    
end
