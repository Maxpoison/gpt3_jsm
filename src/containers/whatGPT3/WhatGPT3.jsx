import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whgpt3'>
        <div className='gpt3__whatgpt3-feature'>
          <Feature title='What is  GPT-3' text='GPT-3, or the third generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text.' />
        </div>
        <div className='gpt3__whatgpt3-heading'>
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <p>Explore The Library</p>
        </div>
        <div className='gpt3__whatgpt3-container'>
          <Feature title='Chatbots' text='Quickchat is a fully conversational AI Chat Bot powered by OpenAI GPT-3. You can use it to automate your customer support, online applications, searching through internal knowledge base and many other tasks.' />

          <Feature title='Knowledgebase' text='Helphub is a smart knowledge base that uses AI, powered by GPT-3, to write support articles for you.' />
          
          <Feature title='Education' text='GPT-3 (Generative Pre-Trained Transformer 3) is a deep learning model for the task of language modeling.' />
        </div>
    </div>
  )
}

export default WhatGPT3;