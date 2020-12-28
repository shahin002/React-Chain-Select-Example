import * as Types from "../Types";
import axios from "axios";

export const getDivisionAction = () => async (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: [],
    };

    dispatch({type: Types.DIVISION_LIST, payload: data});

    await axios
        .get(`http://127.0.0.1:8000/api/get-divisions`)
        .then(async (res) => {
            const response = res.data;
            data.data = response;
            data.message = 'success';
            if (res.status === 200) {
                data.status = true;
            } else {
                data.status = false;
            }
        })
        .catch((err) => {
            data.message = err.data;
        });

    data.isLoading = false;
    dispatch({type: Types.DIVISION_LIST, payload: data});
};
export const getDistrictAction = (division_id) => async (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: [],
    };

    dispatch({type: Types.DISTRICT_LIST, payload: data});

    await axios
        .get(`http://127.0.0.1:8000/api/get-districts`, {
            params: {
                division_id: division_id
            }
        })
        .then(async (res) => {
            const response = res.data;
            data.data = response;
            data.message = 'success';
            if (res.status === 200) {
                data.status = true;
            } else {
                data.status = false;
            }
        })
        .catch((err) => {
            data.message = err.data;
        });

    data.isLoading = false;
    dispatch({type: Types.DISTRICT_LIST, payload: data});
};
export const getUpazillaAction = (district_id) => async (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: [],
    };

    dispatch({type: Types.UPAZILLA_LIST, payload: data});

    await axios
        .get(`http://127.0.0.1:8000/api/get-upazillas`, {
            params: {
                district_id: district_id
            }
        })
        .then(async (res) => {
            const response = res.data;
            data.data = response;
            data.message = 'success';
            if (res.status === 200) {
                data.status = true;
            } else {
                data.status = false;
            }
        })
        .catch((err) => {
            data.message = err.data;
        });

    data.isLoading = false;
    dispatch({type: Types.UPAZILLA_LIST, payload: data});
};
export const getUnionaAction = (upazilla_id) => async (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: [],
    };

    dispatch({type: Types.UNION_LIST, payload: data});

    await axios
        .get(`http://127.0.0.1:8000/api/get-unions`, {
            params: {
                upazilla_id: upazilla_id
            }
        })
        .then(async (res) => {
            const response = res.data;
            data.data = response;
            data.message = 'success';
            if (res.status === 200) {
                data.status = true;
            } else {
                data.status = false;
            }
        })
        .catch((err) => {
            data.message = err.data;
        });

    data.isLoading = false;
    dispatch({type: Types.UNION_LIST, payload: data});
};
/*

export const getPostDetailAction = (id) => async(dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: {},
    };

    dispatch({ type: Types.POST_SHOW, payload: data });

    await axios
        .get(`http://laravel07-starter.herokuapp.com/api/v1/administrator/posts/${id}`)
        .then((res) => {
            const { response } = res.data;
            data.data = response.post;
            data.message = response.message;
            if (response.meta.status === 200) {
                data.status = true;
            } else {
                data.status = false;
            }
        })
        .catch((err) => {
            data.message = err.data;
        });

    data.isLoading = false;
    dispatch({ type: Types.POST_SHOW, payload: data });
};


export const handleChangePostInput = (name, value) => (dispatch) => {
    let data = {
        name: name,
        value: value,
    }
    dispatch({ type: Types.CHANGE_POST_INPUT, payload: data });
};

export const storePostAction = (postData) => async(dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
    };

    dispatch({ type: Types.POST_CREATE, payload: data });

    await axios
        .post(
            `http://laravel07-starter.herokuapp.com/api/v1/administrator/posts`,
            postData
        )
        .then(async(res) => {
            const { response, meta } = res.data;
            data.message = response.message;
            if (meta.status === 200) {
                data.status = true;
                toast.success(data.message);
            } else {
                data.status = false;
                toast.error(data.message);
            }
        })
        .catch((err) => {
            data.message = err.data;
            toast.error(data.message);
        });

    data.isLoading = false;
    dispatch({ type: Types.POST_CREATE, payload: data });
};

export const postUpdateAction = (postData, id) => async(dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: postData
    };

    dispatch({ type: Types.POST_UPDATE, payload: data });

    await axios
        .put(
            `http://laravel07-starter.herokuapp.com/api/v1/administrator/posts/${id}`,
            postData
        )
        .then((res) => {
            const { response, meta } = res.data;
            data.data = response.post;
            data.message = response.message;
            if (meta.status === 200) {
                data.status = true;
                toast.success(response.message);
            } else {
                data.status = false;
                toast.error(response.message);
            }
        })
        .catch((err) => {
            data.message = err.data;
            toast.error(data.message);
        });

    data.isLoading = false;
    dispatch({ type: Types.POST_UPDATE, payload: data });
};

/!**
 * getSingle post by id
 *
 * @param {integer} id
 *!/
export const getSinglePostAction = (id) => async(dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: [],
    };

    dispatch({ type: Types.POST_SHOW, payload: data });

    await axios
        .get(
            `http://laravel07-starter.herokuapp.com/api/v1/administrator/posts/${id}`
        )
        .then(async(res) => {
            const response = res.data;
            data.data = res.data.response.post;
            data.message = res.data.response.message;
            if (response.meta.status === 200) {
                data.status = true;
            } else {
                data.status = false;
            }
        })
        .catch((err) => {
            data.message = err.data;
        });

    data.isLoading = false;
    dispatch({ type: Types.POST_SHOW, payload: data });
};

/!**
 * delete post by id
 *
 * @param {integer} id
 *!/
export const deletePostAction = (id) => async(dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: [],
    };

    dispatch({ type: Types.POST_DELETE, payload: data });

    await axios
        .delete(
            `http://laravel07-starter.herokuapp.com/api/v1/administrator/posts/${id}`
        )
        .then(async(res) => {
            const response = res.data;
            data.data = id;
            data.message = res.data.response.message;
            if (response.meta.status === 200) {
                data.status = true;
                toast.success(data.message);
            } else {
                data.status = false;
                toast.error(data.message);
            }
        })
        .catch((err) => {
            data.message = err.data;
        });

    data.isLoading = false;
    dispatch({ type: Types.POST_DELETE, payload: data });
};
*/