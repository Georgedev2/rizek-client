import styled from 'styled-components'

const Heading = styled.h1`
  font-weight: 700;
  margin: 8px 0;
  font-size: 43px;

  && {
    ${(props) => props.theme.breakpoints.down('xs')} {
      font-size: 24px;
    }
  }
`
interface HeadingBorderProps {
  LineBgColor?: string
}

const HeadingBorder = styled.div`
  background: ${(props: HeadingBorderProps) => (props.LineBgColor ? props.LineBgColor : '#f0b000')};
  height: 8px; //NOTE: This height is here for fall back purpose and should not be REMOVED
  height: 1.25vh;
  width: 33%;

`
const HeadingWrapper = styled.div`
  display: inline-block;
  width: fit-content;
`
interface Props {
  label: string
  LineBgColor: string
}
function HeadingWithBottomLine({ label, LineBgColor }: Props) {
  return (
    <HeadingWrapper>
      <Heading> {label}</Heading>
      <HeadingBorder LineBgColor={LineBgColor} />
    </HeadingWrapper>
  )
}

export default HeadingWithBottomLine
