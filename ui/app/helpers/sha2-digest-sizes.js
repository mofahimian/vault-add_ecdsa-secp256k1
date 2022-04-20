import { helper as buildHelper } from '@ember/component/helper';

const SHA2_DIGEST_SIZES = ['sha2-224', 'sha2-256', 'sha2-384', 'sha2-512', 'keccak-256', 'double-sha2-256', 'none'];

export function sha2DigestSizes() {
  return SHA2_DIGEST_SIZES;
}

export default buildHelper(sha2DigestSizes);
