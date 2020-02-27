import React from 'react'

const FormProducts = () => {
    return (
        <div className="col-md-6">
            <h1 className="text-center">Cadastro de Produtos</h1>
                <form>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label htmlFor="descricao">Descrição:</label>
                                <input type="email" className="form-control" id="descricao" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="preco">Preço:</label>
                                <input type="tet" className="form-control" id="preco" />
                            </div>                        
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="quantidade">Quantidade:</label>
                                <input type="text" className="form-control" id="quantidade" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary btn-block">Gravar</button>
                        </div>
                    </div>
                </form>            
        </div>        
    );
}

export default FormProducts