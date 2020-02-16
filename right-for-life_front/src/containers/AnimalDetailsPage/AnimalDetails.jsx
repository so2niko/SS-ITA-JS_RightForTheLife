import React, { useState, useRef } from "react";
import { Card } from './Card';
import { BackBtn, ShareBtn } from '../../components/FloatingBtn'
import { ShareMobile } from "./ShareMobile.jsx";
import { UpdateImageGallery } from '../../components/UpdateImageGallery';
import { EditModeBar } from '../../components/EditModeBar';
import { Select } from '../../components/Select';
import './style.css'

export const AnimalDetails = (props) => {
  const [animal, setAnimal] = useState(props);
  const [isEdit, setIsEdit] = useState(props.isEdit);
  const [isEditModeBarOpen, setIsEditModeBarOpen] = useState(props.isEditModeBarOpen);

  const descriptionRef = useRef();

  const selectOptionChoseHandler = selectedOption => {
    switch (selectedOption) {
      case 'edit':
        setIsEditModeBarOpen(true);
        setIsEdit(true);
        break;
      default:
        return null;
    }
  };

  const updateName = (newName) => setAnimal({ ...animal, name: newName });
  const updateAge = (newAge) => setAnimal({ ...animal, age: newAge });
  const updateGender = (newGender) => setAnimal({ ...animal, gender: newGender });

  return (
    <div className="-mt-6 sm:mt-0">
      {!isEdit &&
        <>
          <BackBtn />
          <div className="hidden sm:block">
            <ShareBtn />
          </div>
        </>
      }

      {isEditModeBarOpen
        ? <EditModeBar
          isOpen={isEditModeBarOpen}
          onEdit={() => setIsEdit(!isEdit)}
        />
        : <Select
          classNames="fixed z-50 top-0 right-0 mr-10 mt-20"
          chooseOptionHandler={selectOptionChoseHandler}
          optEdit
          optDelete
        />
      }

      <div className="flex-none sm:flex mx-auto px-0 sm:px-4" style={{ maxWidth: '800px' }}>
        <div className="w-full sm:w-1/2">
          {
            isEdit
              ? <Card {...animal}
                updateName={updateName}
                updateGender={updateGender}
                updateAge={updateAge}
                isEdit
              />
              : <Card {...animal} isEdit={false} />
          }
          {isEdit && (
            <UpdateImageGallery
              images={animal.photos}
              updateImages={photos => setAnimal({ ...animal, photos })}
            />
          )}
        </div>

        {!isEdit && <ShareMobile className="mt-8 -mb-6" />}

        <div
          contentEditable={isEdit}
          suppressContentEditableWarning
          ref={descriptionRef}
          onBlur={() =>
            setAnimal({ ...animal, description: descriptionRef.current.textContent })
          }
          className={`w-full sm:w-1/2 mt-10 sm:mt-5 mb-5 mx-0 sm:ml-12 sm:mr-12 md:mr-8 lg:mr-0 font-medium 
            text-gray-700 border-8 border-transparent ${isEdit ? 'bg-orange-100' : ''}`}>
          {animal.description}
        </div>
      </div>
    </div>
  )
}

AnimalDetails.defaultProps = {
  name: 'Имя питомца',
  age: 1577829600000,
  photos: [],
  gender: '',
  description: 'История питомца.',
}