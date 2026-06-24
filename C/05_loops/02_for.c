/*
	
	for(assigment;codition;inc/dec){
		...code;
	}

*/

#include<stdio.h>
#include<conio.h>


int main()
{
	
	int i;
	
//	for(i=1;i<=10;i++){
//		printf("%d\n",i);
//	}
//	
//	for(i=10;i>=1;i--){
//		printf("%d\n",i); 
//	}

//	for(i=1;i<=10;i++){
//		if(i<=5){
//			printf("%d\n",i);
//		}
//	}

//	for(i=1;i<=10;i++){
//		if(i>=5){
//			printf("%d\n",i);
//		}
//	}

	for(i=1;i<=10;i++){
		if(!(i>=5 && i<=7)){
			printf("%d\n",i);
		}
		
	}
	
		
	getch();
}
