import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  gap: ${(props) => props.gap || '0'};
`;

export const Button = styled.button.attrs((props) => ({
  type: props.type || 'button',
  disabled: props.disabled || false,
}))`
  background-color: ${(props) => props.backgroundColor || '#2F72FF'};
  border: 1px solid ${(props) => props.borderColor || 'transparent'};
  border-radius: ${(props) => props.borderRadius || '4px'};
  color: ${(props) => props.color || '#fff'};
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || 'normal'};
  padding: ${(props) => props.padding || '0.5rem 1rem'};
  margin: ${(props) => props.margin || '0'};
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || '#0F5BFF'};
    border: 1px solid ${(props) => props.hoverBorderColor || 'transparent'};
    color: ${(props) => props.hoverColor || '#fff'};
  }
`;

export const AlignCenter = styled(Flex)`
  align-items: center;
`;

export const JustifyCenter = styled(Flex)`
  justify-content: center;
`;

export const AlignAndJustifyCenter = styled(Flex)`
  align-items: center;
  justify-content: center;
`;

export const Column = styled(Flex)`
  flex-direction: column;
`;
