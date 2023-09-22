import React from 'react'
import { money, freelance, stocks, users, bitcoin, card, piggy, book, food, medical, tv, groceries, clothing, travelling, circle, rupee, comment, calender, trash } from '../../utils/icons'
import styled from 'styled-components'
import { dateFormat } from '../../utils/dateFormat'
import Button from '../Button/Button'

function Item({ id, title, amount, category, type, description, deleteItem, indicatorColor, date }) {

    const incomeCategory = () => {
        switch(category) {
            case "salary" : 
                return money

            case "freelancing" : 
                return freelance

            case "investments" : 
                return users

            case "stocks" : 
                return stocks;

            case "crypto" : 
                return bitcoin;

            case "bank" : 
                return card;

            case "other" : 
                return piggy;

            default :
                return piggy
        }
    }

    const expenseCategory = () => {
        switch(category.toLowerCase()) {
            case "eductaion" : 
                return book;

            case "food" : 
                return food;

            case "health" : 
                return medical;

            case "subscriptions" : 
                return tv;

            case "groceries" : 
                return groceries;

            case "clothing" : 
                return clothing;

            case "travelling" : 
                return travelling;

            case "other" : 
                return circle;

            default :
                return circle
        }
    }


    return (
        <ItemStyled>
            <div className="icon">
                {type === 'expense' ? expenseCategory() : incomeCategory()}
            </div>
            <div className='content'>
                <div className='context-details'>
                    <h5>{title}</h5>
                    <div className='inner-content'>
                        <div className='text'>
                            <p>{rupee} {amount}</p>
                            <p>{calender} {dateFormat(date)}</p>
                            <p>{comment} {description}</p> 
                        </div>

                    </div>
                </div>
                <div className="btn-con">
                    <Button 
                        icon={trash}
                        bPad={'0.7rem'}
                        bRad={'50%'}
                        bg={'var(--primary-color'}
                        color={'#fff'}
                        iColor={'#fff'}
                        hColor={'var(--color-green)'}
                        onClick={() => deleteItem(id)}
                    />
                </div>
            </div>
        </ItemStyled>
    )
}

const ItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    color: #222260;
    .icon{
        width: 40px;
        height: 40px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 10px;
        /* border: 2px solid #FFFFFF; */
        i{
            font-size: 2rem;
        }
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        /* gap: .2rem; */
        h5{
            font-size: 1.2rem;
            /* padding-left: 2rem; */
            position: relative;
            margin: 5px 0;
            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;
                }
            }
        }

        .btn-con {
            margin-right: 0.8em;
        }
    }
`

export default Item
