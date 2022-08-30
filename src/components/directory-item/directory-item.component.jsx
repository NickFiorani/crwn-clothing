import { useNavigate } from 'react-router-dom' // hook di react per cambiare route

import {BackgroundImage, Body, DirectoryItemContainer} from  './directory-item.style';

const DirectoryItem = ( {category} ) => {

    const {imageUrl, title, route }= category;

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return(
        <DirectoryItemContainer onClick={onNavigateHandler}>
          <BackgroundImage imageUrl={imageUrl} // ai styled components posso passare delle prop come se fossero nomrali components(imageUrl prop creata nel directory-item.style)       
          /*  style={{
            backgroundImage : `url(${imageUrl})` // vecchio metodo prima di usare i styled components
          }}  *//>
          <Body>
            <h2>{title}</h2>
            <p>Shop now</p>
          </Body>
        </DirectoryItemContainer>
    )

}



export default DirectoryItem;