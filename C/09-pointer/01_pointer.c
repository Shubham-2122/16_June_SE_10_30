#include<stdio.h>
#include<conio.h>

int main()
{
	int a = 25; //intial
	int *p = &a; //pointer varible decaration
	
	printf("A : %d",a);
	printf("\np : %d",p); //pointer value address of a
	
	printf("\nPointer :%d",*p); // normal p value
	
	printf("\n%zu\n", sizeof(p));
	
	
	
	return 0;
}
