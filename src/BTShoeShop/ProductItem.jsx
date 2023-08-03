import React from "react";
import { useDispatch } from "react-redux";
import { baiTapShoe } from "../Store/BaiTapShoe/actions";

const ProductItem = ({ v }) => {
    const dispatch = useDispatch();

    

    return (
        <div className="col-3 mt-4">
            <div className="card">
                <img className="img-fluid" src={v.image} alt="..." />
                <div className="card-body">
                    <p className="fw-bold fs-5" style={{ height: 40 }}>
                        {v.name}
                    </p>
                    <p className="text-danger fs-6">{v.price}$</p>
                    <div className="d-flex justify-content-between">
                        <button
                            className="btn btn-primary"
                            onClick={() => {
                                dispatch(baiTapShoe.handleAddCart(v));
                            }}
                        >
                            Add to Cart
                        </button>
                        <button
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            className="btn btn-outline-success"
                            onClick={() => {
                                dispatch(baiTapShoe.handlePrdDetail(v));
                            }}
                        >
                            Detail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
