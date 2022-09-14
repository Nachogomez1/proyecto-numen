
import React from 'react'
import '../Card/Productos.css';
import Images from './img/Images'



export const ProductosLista = () => {
    return (
        <>
            <h1 className='title'>  Celulares</h1>
            <div className="productos">
                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[0].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[0].title}</h1>
                        <p> {Images[0].marca}</p>
                        <p className='price'> $ 48.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>
                </div>

                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[1].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[1].title}</h1>
                        <p> {Images[1].marca} </p>
                        <p className='price'> $ 25.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>
                </div>

                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[2].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[2].title}</h1>
                        <p> {Images[2].marca} </p>
                        <p className='price'> $ 37.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>
                </div>
                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[3].img} alt='150' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[3].title}</h1>
                        <p> {Images[3].marca} </p>
                        <p className='price'> $ 72.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>
                </div>

                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[4].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[4].title}</h1>
                        <p> {Images[4].marca}</p>
                        <p className='price'> $ 132.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>
                </div>

                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[5].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[5].title}</h1>
                        <p> {Images[5].marca} </p>
                        <p className='price'> $ 82.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>
                </div>

                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[6].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[6].title}</h1>
                        <p> {Images[6].marca} </p>
                        <p className='price'> $ 102.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>
                </div>

                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[7].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[7].title}</h1>
                        <p> {Images[7].marca} </p>
                        <p className='price'> $ 88.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>

                </div>

                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[8].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[8].title}</h1>
                        <p> {Images[8].marca} </p>
                        <p className='price'> $ 96.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>

                </div>

                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[9].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[9].title}</h1>
                        <p> {Images[9].marca} </p>
                        <p className='price'> $ 65.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>

                </div>

                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[10].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[10].title}</h1>
                        <p> {Images[10].marca} </p>
                        <p className='price'> $ 82.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>

                </div>

                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[11].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[11].title}</h1>
                        <p> {Images[11].marca} </p>
                        <p className='price'> $ 92.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>

                </div>

                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[12].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[12].title}</h1>
                        <p> {Images[12].marca} </p>
                        <p className='price'> $ 103.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>

                </div>

                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[13].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[13].title}</h1>
                        <p> {Images[13].marca} </p>
                        <p className='price'> $ 99.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>

                </div>

                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[14].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[14].title}</h1>
                        <p> {Images[14].marca} </p>
                        <p className='price'> $ 32.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a
                                href='#' className='btn'>Vista</a>
                        </div>
                    </div>

                </div>

                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[15].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[15].title}</h1>
                        <p> {Images[15].marca} </p>
                        <p className='price'> $ 88.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>

                </div>

                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[16].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[16].title}</h1>
                        <p> {Images[16].marca} </p>
                        <p className='price'> $ 108.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>

                </div>

                <div className='producto'>
                    <a href='#'>
                        <div className='producto_img'>
                            <img src={Images[17].img} alt='' />
                        </div>
                    </a>
                    <div className='producto_footer'>
                        <h1>{Images[17].title}</h1>
                        <p> {Images[17].marca} </p>
                        <p className='price'> $ 128.000 </p>
                    </div>
                    <div className='buttom'>
                        <button className='btn'>
                            Añadir al carrito
                        </button>
                        <div>
                            <a href='#' className='btn'>Vista</a>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default ProductosLista