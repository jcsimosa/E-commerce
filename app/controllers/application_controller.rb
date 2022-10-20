class ApplicationController < ActionController::Base
rescue_from ActiveRecord::RecordNotFound, with: :not_found


private 

def not_found(exception)
    render json: {error: "#{exception.model} not found"}, status: :not_found
end 
    
end
