import contract from './contract';

const errorMessage = {
  noType: 'Type was not provided',
  unkownType: 'The following data type is unkown',
  dataParsing: 'There was an error while parsing data:',
};

const transformData = data => data.map(({ type, ...otherData }) => {
  if (typeof type === 'undefined') {
    throw new Error(errorMessage.noType);
  }
  if (!contract[type]) {
    throw new Error(`${errorMessage.unkownType}: ${type}`);
  }

  return {
    ...otherData,
    type: contract[type],
  };
});

export { errorMessage };
export default transformData;
