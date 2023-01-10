import styled from 'styled-components'



export const ContainerCon = styled.div<{ isPadding?: boolean }>`
  width: 100%;
  height: 100%;
  .container{
    padding-top: 87px;
    width: 1294px;
    margin: 0 auto;
    h1{
        color: #fff;
    }
    #code,#test{
        width: 500px;
        height: 200px;

    }
    .test{
        margin: 20px;
        overflow: auto;
        background: #fff;
    }
  }
`

export const StyleCodeDom = styled.div`
    
`



 