import React, { useState } from 'react'

const Imageuploader = () => {
    const [image, setImage] = useState('')


    const handleUpload = (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('image', image);
        fetch('http://localhost:4000/user/upload_image', {
            method: 'POST',
            headers: {
                "auth-token": localStorage.getItem('user_token')
            },
            body: formdata
        }).then(res => res.json())
            .then((data) => {
                console.log(data);
            }).catch((err) => {
                console.log(err);
            })
    }


    return (
        <form onSubmit={handleUpload} encType="multipart/form-data">
            <input onChange={(e) => setImage(e.target.files[0])} type="file" className="" />
            <button type="submit" className="bg-blue-600 mt-4 rounded-full px-6 py-1 text-gray-100">upload</button>
        </form>
    )
}

export default Imageuploader
