import PollyRequest from '@pollyjs/core/-private/request';
import PollyResponse from '@pollyjs/core/-private/response';

const { isArray } = Array;

/**
 * Get the value of the given header name. If the value is an array,
 * get the first value.
 *
 * @export
 * @param {PollyRequest | PollyResponse} r
 * @param {string} name
 * @returns {string | undefined}
 */
export default function getFirstHeader(
  r: PollyRequest | PollyResponse,
  name: string
) {
  const value = r.getHeader(name);

  if (isArray(value)) {
    return value.length > 0 ? value[0] : '';
  }

  return value;
}
