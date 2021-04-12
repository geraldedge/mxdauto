import React from 'react';
import { Button } from '../ButtonElements';
import { Column2, ImgWrap,InfoContainer,InfoRow,InfoWrapper,TextWrapper,Topline,Heading,
    Subtitle,BtnWrap,Column1 ,Img} from './infoelements';

  

const InfoS = ({lightBg,topline,img,imgStart,id,lightText,headline,description,alt,darkText,buttonLabel,dark}) => {
    let a =1 ;
    let b =0;
    return (
        <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>

                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                       
                        <Heading lightText={lightText}>
                           {headline}

                        </Heading>
                        <Subtitle darkText={darkText}>
                            {description}
                        </Subtitle>
                        <BtnWrap>
                            <Button to="home" big="true" dark={dark}
                            fontBI
                            
    
                            smooth={true}
                            
                            spy={true}
                            exact='true'
                            offset={-80}
                            >{buttonLabel}</Button>
                        </BtnWrap>

                    </TextWrapper>
                    </Column1>
                    <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                    </ImgWrap>

                    </Column2>
                </InfoRow>
            </InfoWrapper>


        </InfoContainer>
            
        </>
    )
}

export default InfoS
