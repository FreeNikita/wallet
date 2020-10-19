import React from 'react';
import { useParams } from 'react-router-dom';

import Button from '@material-ui/core/Button';

export const Wallet = () => {
  const { id } = useParams();
  return (
    <div>
        <div>
            {id}
        </div>

        <div>
            <Button variant="contained">Add</Button>
            <Button variant="contained" color="primary">
                Pay
            </Button>
        </div>

      <Button variant="contained" color="secondary">
        Remove
      </Button>
    </div>
  );
};
