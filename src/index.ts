import { ReactWrapper } from 'enzyme'
import toJson, { Options } from 'enzyme-to-json'
import snapshotDiff from 'snapshot-diff'

const enzymeSnapshotDiff = (
  valueA: ReactWrapper,
  valueB: ReactWrapper,
  opts?: Options
): string => {
  return snapshotDiff(toJson(valueA, opts), toJson(valueB, opts))
}

export default enzymeSnapshotDiff
