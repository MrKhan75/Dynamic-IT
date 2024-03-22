

const Phone = ({product}) => {


    const {image, phone_name, slug} = product;
    const price = parseInt(slug.split('-')[1]);
    return (
        <div>

        <div className="text-center bg-sky-200 p-5 rounded-md">
            <img className="mx-auto rounded-lg" src={image} alt="" />
            <p className="text-2xl py-3">{phone_name}</p>
            <p className="text-lg "><span>Tk. </span>{price}</p>
        </div>



        </div>

    );
};

export default Phone;