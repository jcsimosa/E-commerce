class ProductsController < ApplicationController

    def index 
        products = Product.all 
        render json: products, status: :ok
    end
    def show 
        product = Product.find(params[:id])
        render json: product, status: :ok
    end
    def create
        byebug
        product = Product.create!(product_params)
        render json: product, status: :created
    end
    private 
    def product_params
        params.permit(:name,:price,:description,:img)
    end

end
