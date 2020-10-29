import React from 'react';
import { 
  CharacterCount,
  Hint
} from 'govuk-react-jsx';

function Bar() {
  return (
    <>
      <p className="govuk-body">
        Bar
      </p>
      <Hint>
        This is a hint
      </Hint>
      <CharacterCount
        id="more-detail"
        label={{
          children: [
            'Can you provide more detail?'
          ]
        }}
        maxlength={10}
        name="more-detail"
      />
    </>
  )
}

export { Bar };


