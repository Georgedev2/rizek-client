import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

const Product = styled(Card)`
  max-width: 22.1875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1.125rem;
  background-color: #fff;
  border-radius: 0.5rem;
  margin-right: 1.6875rem;
  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      padding: 0.5rem;
      max-width: 10.125rem; //162px
    }
  }
`

const ProductImage = styled(CardMedia)`
  height: 12.34rem;
  width: 100%;
  background-size: contain;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      height: 6rem;
      max-width: 7.75rem;
    }
  }
`

const ProductPrice = styled.h3`
  font-weight: 600;
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

const ProductName = styled(ProductPrice)`
  color: #09a8dd;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.5rem;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      font-size: 14px;
      margin-bottom: 2.25rem;
    }
  }
`

const AddToBasketBtn = styled.button`
  color: #09a8dd;
  background: #e1f4fa;
  font-size: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  height: 3rem;
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      justify-content: center;
    }
  }
`
const AddToBasketBtnIcon = styled.div`
  background-image: url('/images/icons/other-icons/add-to-card-plus-sign.svg');
  background-size: contain;
  margin: 0 13px 0 18px;
  height: 21px;
  width: 21px;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      margin: 0 13px 0 0;
    }
  }
`
interface ProductCardProps {
  product: { id: number; image: string; title: string; price: number }
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Product>
      <ProductImage image={product.image} />
      <div>
        <ProductName>{product.title}</ProductName>

        <ProductPrice>AED {product.price}.00</ProductPrice>
      </div>

      <AddToBasketBtn>
        <AddToBasketBtnIcon /> <span>Add to Basket</span>
      </AddToBasketBtn>
    </Product>
  )
}

export default ProductCard
