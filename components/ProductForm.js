'use client'

export default function ProductForm({ onSubmit, isLoading, product }) {
  return (
    <form className="max-w-md" onSubmit={onSubmit}>
      <div className="flex gap-4">
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={product?.name}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="brand"> Marca/Fabricante</label>
          <input
            type="text"
            name="brand"
            id="brand"
            required
            defaultValue={product?.brand}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="form-group">
          <label htmlFor="category">Categoria</label>
          <select
            name="category"
            id="category"
            className="w-full h-9 cursor-pointer"
            defaultValue={product?.category}
          >
            <option value="Alimentos e Bebidas">Alimentos e Bebidas</option>
            <option value="Automotivo">Automotivo</option>
            <option value="Brinquedos e Jogos">Brinquedos e Jogos</option>
            <option value="Casa e Decoração">Casa e Decoração</option>
            <option value="Eletrodomésticos">Eletrodomésticos</option>
            <option value="Eletrônicos">Eletrônicos</option>
            <option value="Esporte e Lazer">Esporte e Lazer</option>
            <option value="Ferramentas e Equipamentos">
              Ferramentas e Equipmentos
            </option>
            <option value="Informática">Informática</option>
            <option value="Livros e Mídias">Livros e Mídias</option>
            <option value="Saúde e Beleza">Saúde e Beleza</option>
            <option value="Vestuário e Moda">Vestuário e Moda</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantidade</label>
          <input
            type="number"
            name="quantity"
            class="text-center"
            id="quantity"
            required
            defaultValue={product?.quantity}
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="form-group">
          <label htmlFor="priceUnit">Valor Unit (R$)</label>
          <input
            type="number"
            name="priceUnit"
            id="priceUnit"
            class="text-center"
            required
            defaultValue={product?.priceUnit}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="priceSale"> Preço Venda (R$)</label>
          <input
            type="number"
            name="priceSale"
            id="priceSale"
            class="text-center"
            required
            defaultValue={product?.priceSale}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="description">Descrição</label>
        <textarea
          name="description"
          id="description"
          rows="5"
          required
          className="w-full"
          defaultValue={product?.description}
        ></textarea>
      </div>

      <button
        disabled={isLoading}
        className="bg-sky-500 hover:bg-sky-600 transition-all p-2 text-white disabled:bg-zinc-500 w-full"
      >
        {product ? 'Salvar Alterações' : 'Cadastrar Produto'}
      </button>
    </form>
  )
}
