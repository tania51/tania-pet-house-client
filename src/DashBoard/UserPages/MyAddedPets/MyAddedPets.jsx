import useAddPets from "../../../hooks/useAddPets";


const MyAddedPets = () => {
    const [addPets] = useAddPets();
    console.log(addPets);

    return (
        <div>
            this is my added pets page
        </div>
    );
};

export default MyAddedPets;