import React from 'react'
import { ListContainer, ListItem, IconContainer } from './style/ContentResumen.style';
import { Paths } from '../../const/paths';
function ContentResumen() {
  
    return (
      <ListContainer>
          {Paths.map((path, index) => (
              <ListItem key={index}>
                  <IconContainer>
                      <path.icon />
                  </IconContainer>
                  <div>{path.name}</div>
              </ListItem>
          ))}
      </ListContainer>
  );
  
}

export default ContentResumen