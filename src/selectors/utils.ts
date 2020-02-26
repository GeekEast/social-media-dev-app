import { createSelector } from "reselect";
import _ from "lodash";

export const makeEntitiesSelector = (entity_name: any) => createSelector(
  state => _.get(state, [entity_name]),
  entities => entities
)

export const makeEntitySelector = (entities_selector: any, filter: any) => createSelector(
  [entities_selector],
  filter
)