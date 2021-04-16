import React, { useRef, useContext, useState } from 'react'
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';
import Modal from '../Modal';

import { Container, Label } from './style';

export default function Card({ data, index, listIndex }) {
    const ref = useRef();
    const [isOpen, setisOpen] = useState(false);
    const modalRef = useRef(null);

    const showDropdown = (id) => {
        console.log(id)
        setisOpen(true)
        document.body.addEventListener("click", closeDropdown);
    }

    const closeDropdown = event => {
        event.stopPropagation();
        const contain = ref.current.contains(event.target);
        console.log(contain);
        console.log(ref.current, event.target);
        if (!contain) {
            setisOpen(false)
            document.body.removeEventListener("click", closeDropdown);
        }
    };

    const { move } = useContext(BoardContext);

    const [{ isDragging }, dragRef] = useDrag({
        item: { type: 'CARD', index, listIndex },
        type: 'CARD',
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;

            const draggedIndex = item.index;
            const targetIndex = index;

            if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
                return;
            }

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;

            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;

            if (draggedIndex < targetIndex && draggedTop < targetCenter) {
                return;
            }

            if (draggedIndex > targetIndex && draggedTop > targetCenter) {
                return;
            }

            move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

            item.index = targetIndex;
            item.listIndex = targetListIndex;
        }
    })

    dragRef(dropRef(ref));

    return (
        <>
            <Container ref={ref} isDragging={isDragging} onClick={() => showDropdown(data.id)}>
                <header>
                    {data.labels.map(label => <Label key={label} color={label} />)}
                </header>
                <p ref={modalRef}>{data.content}</p>
                <img alt="avatar" src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Blank&hairColor=Brown&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=Overall&clotheColor=Gray02&eyeType=Default&eyebrowType=UpDown&mouthType=Twinkle&skinColor=Yellow' />
            </Container>

            <Modal
                isOpen={isOpen}
                modalRef={modalRef}
                data={data}
                title="Projeto"
            />
            
        </>

    );
}



