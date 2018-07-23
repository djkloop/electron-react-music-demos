// @flow
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


type Props = {
  style: Object,
  silderList: Object
};

const ELEC_SIDER_PREFIX = 'elec_sider_container_sider'

const SiderList  = (props: Props) => {

  const { style, silderList } = props;
  console.log(silderList)
  return (
    <div>
      {
        silderList.map(sider => (
          <div  key={sider.title} className={style.elec_sider_container_sider_block}>
            <h4 className={style[`${ELEC_SIDER_PREFIX}_title`]}>{sider.title}</h4>
            <ul className={style[`${ELEC_SIDER_PREFIX}_list`]}>
              {
                sider.result.map(siderItem => (
                  <li key={siderItem.name} className={style[`${ELEC_SIDER_PREFIX}_listItem`]}>
                    <FontAwesomeIcon size="1x" icon={siderItem.icon} />
                    <span>{siderItem.name}</span>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  )
}

export default SiderList
