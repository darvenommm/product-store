const baseServerUrl = process.env.NEXT_PUBLIC_SERVER_URL;

if (!baseServerUrl) {
  throw new Error('NOT FOUND SERVER URL FROM .ENV FILE!!!');
}

export function getBaseServerUrl(): string {
  return baseServerUrl!;
}
