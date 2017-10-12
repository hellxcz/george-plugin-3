
export const pluginId = 'cz-paystory';

export const pluginName = `plugins.${pluginId}`;

const idStub = pluginId;

export const getId = (input:string) => {
  return `${idStub}-${input}`;
};

