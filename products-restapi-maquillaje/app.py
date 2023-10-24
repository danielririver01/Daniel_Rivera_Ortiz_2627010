from flask import Flask, jsonify, request
from products import products

app = Flask(__name__)

# Ruta de prueba para verificar si la aplicación está funcionando
@app.route('/JHOJHO', methods=['GET'])
def ping():
    return jsonify({'response': 'JHOJHO!'})

# Ruta para obtener la lista de productos
@app.route('/products')
def getProducts():
    return jsonify({'products': products})

# Ruta para obtener un producto por su nombre
@app.route('/products/<string:product_name>')
def getProduct(product_name):
    # Filtrar productos por el nombre
    productsFound = [product for product in products if product['nombre'] == product_name.lower()]
    if len(productsFound) > 0:
        return jsonify({'product': productsFound[0]})
    return jsonify({'message': 'Producto No Encontrado'})

# Ruta para agregar un nuevo producto
@app.route('/products', methods=['POST'])
def addProduct():
    # Crear un nuevo producto basado en los datos proporcionados en la solicitud JSON
    new_product = {
        'nombre': request.json['nombre'],
        'cantidad': request.json['cantidad'],
        'precio': request.json['precio'],
        'id': len(products) + 1  # Genera un nuevo ID basado en la longitud de la lista
    }
    products.append(new_product)
    return jsonify({'products': products})

# Ruta para actualizar un producto existente
@app.route('/products/<string:product_name>', methods=['PUT'])
def editProduct(product_name):
    productsFound = [product for product in products if product['nombre'] == product_name]
    if len(productsFound) > 0:
        product = productsFound[0]
        # Actualiza los campos del producto con los datos proporcionados en la solicitud JSON
        product['nombre'] = request.json['nombre']
        product['cantidad'] = request.json['cantidad']
        product['precio'] = request.json['precio']
        return jsonify({
            'message': 'Producto Actualizado con Exito',
            'product': product
        })
    return jsonify({'message': 'Productos no encontrados'})

# Ruta para eliminar un producto
@app.route('/products/<string:product_name>', methods=['DELETE'])
def deleteProduct(product_name):
    productsFound = [product for product in products if product['nombre'] == product_name]
    if len(productsFound) > 0:
        # Elimina el producto de la lista
        products.remove(productsFound[0])
        return jsonify({
            'message': 'Product Deleted',
            'products': products
        })

if __name__ == '__main__':
    app.run(debug=True, port=4000)
