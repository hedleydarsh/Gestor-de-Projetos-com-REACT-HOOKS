
import React from "react";
import { MdClass, MdClose, MdSubject } from "react-icons/md";
import { Container, Head, Content, Label, Section, Row, CheckboxContainer, HiddenCheckbox, StyledCheckbox, Text } from "./style";

const Modal = props => {
    const { isOpen, modalRef, data, title } = props;

    return (
        <Container ref={modalRef} isOpen={isOpen}>
            <Head>
                <h2>{title}</h2>
                <button type="button">
                    <MdClose size={14} color="#FFF" />
                </button>
            </Head>
            <Content>
                <Label className='mb-20'>
                    <MdClass size={24} />
                    <h3>Projeto 1</h3>
                </Label>
                <Section>
                    <Label className='mb-5'>
                        <MdSubject size={24} />
                        <h3>Descrição</h3>
                    </Label>
                    <textarea>
                        {data.content}
                    </textarea>
                    <Row className="mt-5 mb-5 flex-end">
                        <button className="btn-success">Salvar</button>{' '}
                    </Row>
                </Section>
                <Section>
                    <Row className='mb-5 flex-start'>
                        <CheckboxContainer>
                            <HiddenCheckbox />
                            <StyledCheckbox />
                            <Text> Escolher a melhor metodologia pra desenvolvimento </Text>
                        </CheckboxContainer>
                    </Row>
                    <Row className='mb-5'>
                        <CheckboxContainer>
                            <HiddenCheckbox />
                            <StyledCheckbox />
                            <Text> Estudar os principios do Kaban </Text>
                        </CheckboxContainer>
                    </Row>
                    <Row className='mb-20'>
                        <CheckboxContainer>
                            <HiddenCheckbox />
                            <StyledCheckbox />
                            <Text> Escolher biblioteca Drag and Drop React para não afetar no Dom do HTML </Text>
                        </CheckboxContainer>
                    </Row>
                    <textarea>
                        {data.content}
                    </textarea>
                    <Row className="mt-5 mb-5 flex-end">
                        <button className="btn-success">Salvar</button>{' '}
                    </Row>
                </Section>
            </Content>
        </Container>
    )
}

export default Modal;