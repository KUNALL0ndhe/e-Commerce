import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Box,
  } from '@chakra-ui/react'

const steps = [
    { title: 'First', description: 'Login' },
    { title: 'Second', description: 'Shipping' },
    { title: 'Third', description: 'Payments' },
    { title: 'Fourth', description: 'Place Order' },

  ]
  
  const CheckoutSteps = ({currentPage}) => {

    const activeStepIndex = steps.findIndex(step => step.description === currentPage);
    if (activeStepIndex === -1) {
      activeStepIndex = 0;
    }
    const { activeStep } = useSteps({
      index: activeStepIndex,
      count: steps.length,
    })
  
    return (
      <Stepper size='sm' orientation='vertical' h='350px' index={activeStep}>
        {steps.map((step, index) => (
          <Step  key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
  
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    )
  }
  
  
export default CheckoutSteps